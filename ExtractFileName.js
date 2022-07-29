// inputs 
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        
        
        return /^(\d+)(_)([a-zA-Z0-9_-]+.[a-zA-Z0-9_-]+)/.exec(dirtyFileName)[3];
    }
}