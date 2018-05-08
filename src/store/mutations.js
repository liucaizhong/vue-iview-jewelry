export default {
  pushNewUploadingFile (state, name) {
    state.uploadingFiles.push({
      name,
      status: 'active',
    })
  },
  updateUploadingStatus (state, { name, status }) {
    console.log('vuex', name)
    state.uploadingFiles.find(cur => cur.name === name).status = status
  },
}
