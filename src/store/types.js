export const makeActionCreator = (type, ...argNames) => (
  function createAction(...args) {
  const action = { type }
  const payload = {}
  if (argNames.length > 0 && argNames[0] === 'payload') {
    action.payload = args[0]
    return action
  }
  argNames.forEach((argName, index) => {
    payload[argName] = args[index]
  })
  action.payload = payload
  return action
}
)

export const ActionTypes = {
  BANNER: {
    FETCH_REQ: 'BANNER_FETCH_REQ',
    FETCH_OK: 'BANNER_FETCH_OK',
    FETCH_ERR: 'BANNER_FETCH_ERR',
  },
  CONTEXT: {
    FLUSH: 'CONTEXT_FLUSH',
    PUSH: 'CONTEXT_PUSH',
    SET: 'CONTEXT_SET',
  },
  RSA_KEY: {
    FETCH_REQ: 'RSA_KEY_FETCH',
    FETCH_OK: 'RSA_KEY_FETCH_OK',
    FETCH_ERR: 'RSA_KEY_FETCH_ERR',
  },
  SESSION: {
    FETCH_REQ: 'SESSION_FETCH',
    FETCH_OK: 'SESSION_FETCH_OK',
    FETCH_ERR: 'SESSION_FETCH_ERR',
  },
  MEDICALLINFORM: {
    FETCH_REQ: 'MEDICALLINFORM_FETCH',
    FETCH_OK: 'MEDICALLINFORM_FETCH_OK',
    FETCH_ERR: 'MEDICALLINFORM_FETCH_ERR',
  },
  MEDICALLLDETAIL: {
    FETCH_REQ: 'MEDICALLLDETAIL_FETCH',
    FETCH_OK: 'MEDICALLLDETAIL_FETCH_OK',
    FETCH_ERR: 'MEDICALLLDETAIL_FETCH_ERR',
  },
  USER: {
    FETCH_REQ: 'USER_FETCH',
    FETCH_OK: 'USER_FETCH_OK',
    FETCH_ERR: 'USER_FETCH_ERR',
  },
  MEDICALLREPORT: {
    FETCH_REQ: 'MEDICALLREPORT_FETCH',
    FETCH_OK: 'MEDICALLREPORT_FETCH_OK',
    FETCH_ERR: 'MEDICALLREPORT_FETCH_ERR',
  },
  DOWNLOAD: {
    FETCH_REQ: 'DOWNLOAD_FETCH',
    FETCH_OK: 'DOWNLOAD_FETCH_OK',
    FETCH_ERR: 'DOWNLOAD_FETCH_ERR',
  },
  DOWNLOADFILE: {
    FETCH_REQ: 'DOWNLOADFILE_FETCH',
    FETCH_OK: 'DOWNLOADFILE_FETCH_OK',
    FETCH_ERR: 'DOWNLOADFILE_FETCH_ERR',
  },
  SSO_SIGN_IN: {
    FETCH_REQ: 'SSO_SIGN_IN',
    FETCH_OK: 'SSO_SIGN_IN_OK',
    FETCH_ERR: 'SSO_SIGN_IN_ERR',
  },
  SSO_TOKEN:{
    FETCH_REQ: 'SSO_TOKEN_FETCH',
    FETCH_OK: 'SSO_TOKEN_FETCH_OK',
    FETCH_ERR: 'SSO_TOKEN_FETCH_ERR',
  },
  POST: {
    FETCH_REQ: 'POST_FETCH',
    FETCH_OK: 'POST_FETCH_OK',
    FETCH_ERR: 'POST_FETCH_ERR',
  },
  IMAGE: {
    FETCH_REQ: 'IMAGE_FETCH',
    FETCH_OK: 'IMAGE_FETCH_OK',
    FETCH_ERR: 'IMAGE_FETCH_ERR',
  }
}
