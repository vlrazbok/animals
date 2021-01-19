const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()

router.post(
  '/register',
  [
    check('email', 'Некоректна пошта').isEmail(),
    check('password', 'Мінімальна довжина символів повинна бути більше 6')
        .isLength({min: 6})
  ],
  async (req, res) =>{
    try{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некоректн дані при реєстрації!'
        })
      }
      const {email, password} = req.body
      
      const candidate = await User.findOne({ email })
      if (candidate) {
        return res.status(400).json({ message: 'Такий користувач вже існує' })
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword})

      await user.save()

      res.status(201).json({ message: 'Користувача створено' })
  
   
    }catch (e){
      res.status(500).json({ message: 'Щось пішло не так, спробуйте заново' })
    }
  }
)
router.post(
  '/login',
  [
    check('email', 'Введіть коректну пошту').normalizeEmail().isEmail(),
    check('password', 'Введіть парось').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некоретні дані при вході в систему'
      })
    }

    const {email, password} = req.body

    const user = await User.findOne({ email })

    if(!user){
      return res.status(400).json({ message: 'Користувача не знайдено' })
    }

    if(user){
      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Некоретний пароль, спробуйте заново' })
      }

      const token = jwt.sign(
        { 
          userId: user.id,
          
        },
        config.get('jwtSecret'),
        { expiresIn: '8h' }
      )

      res.json({ token, userId: user.id })
    }
    } catch (e) {
      res.status(500).json({ message: 'Виникла помилка з сервером' })
    }
  }
)

module.exports = router