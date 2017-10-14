export const API_ROOT = process.env.NODE_ENV === 'development' ? '/api': process.env.NODE_ENV === 'production' ? 'http://ah.csair.com' : 'http://10.92.3.108:8082'
