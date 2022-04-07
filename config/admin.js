module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7bfeb47c75612798cf60b1cdaef67f77'),
  },
});
