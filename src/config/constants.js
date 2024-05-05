import { useContext } from 'react'
import ConfigurationContext from '../context/Configuration'

const ConfigurableValues = () => {
  const configuration = useContext(ConfigurationContext)
  console.log('configuration', configuration)
  const SERVER_URL = 'https://enatega-multivendor.up.railway.app'
  const WS_SERVER_URL = 'wss://enatega-multivendor.up.railway.app'
  // const SERVER_URL = 'http://10.97.17.9:8001'
  // const WS_SERVER_URL = 'wss://10.97.17.9:8001'
  const GOOGLE_MAPS_KEY = configuration.googleApiKey
  const FIREBASE_KEY = 'AIzaSyCCYOxTQBBj0Jf-Ld1d9GNubCVKrplH4a8'
  const APP_ID = '1:442864222:web:b2d25eb01fe8b1f29d1acf'
  const AUTH_DOMAIN = 'foodtakeaway-79d22.firebaseapp.com'
  const STORAGE_BUCKET = "foodtakeaway-79d22.appspot.com"
  const MSG_SENDER_ID = "442864222"
  const MEASUREMENT_ID = "G-JYKSLFP47H"
  const PROJECT_ID = "foodtakeaway-79d22"
  const SENTRY_DSN = configuration.dashboardSentryUrl
  const CLOUDINARY_UPLOAD_URL = configuration.cloudinaryUploadUrl
  const CLOUDINARY_FOOD = configuration.cloudinaryApiKey
  const VAPID_KEY =
    'BOaGZyy_9rhVdZ9-cHAVek-E9eZcuJ4k08ZkeYdudVY6mPN9hFmgQjjzsOaMPjeNguNaS'
  const PAID_VERSION = configuration.isPaidVersion

  return {
    GOOGLE_MAPS_KEY,
    FIREBASE_KEY,
    APP_ID,
    AUTH_DOMAIN,
    STORAGE_BUCKET,
    MSG_SENDER_ID,
    MEASUREMENT_ID,
    PROJECT_ID,
    SERVER_URL,
    WS_SERVER_URL,
    SENTRY_DSN,
    CLOUDINARY_UPLOAD_URL,
    CLOUDINARY_FOOD,
    VAPID_KEY,
    PAID_VERSION
  }
}

export default ConfigurableValues
