module.exports = {
    filenameHashing: false,
    lintOnSave: process.env.NODE_ENV !== 'production',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // mutate config for production...
        } else {
          // mutate for development...
        }
    }
      
}