const UPLOADINGFILESMAXNUM = 30

export default {
  pushNewUploadingFile (state, { name, date }) {
    if (state.uploadingFiles.length < UPLOADINGFILESMAXNUM) {
      state.uploadingFiles.push({
        name,
        date,
        status: 'active',
      })
    } else {
      state.uploadingFiles.shift()
      state.uploadingFiles.push({
        name,
        date,
        status: 'active',
      })
    }
  },
  updateUploadingStatus (state, { name, status }) {
    state.uploadingFiles.find(cur => cur.name === name).status = status
  },
  updateUserInfo (state, userInfo) {
    state.login = Object.assign({}, state.login, userInfo)
  },
}
