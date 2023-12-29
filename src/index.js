const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name

    try{

        const fileExists = await fs.access(fileName)
            .then(() => true)
            .catch(() => false);

        if(fileExists){
            const existingContents=await fs.readFile(fileName,"utf8");

            const updateContents= existingContents+ fileContent;

            await fs.writeFile(fileName, updateContents);
        }
    }
    catch(e){
        console.error(e);
    }
    
};


module.exports = updateFile;
