
const setToSession = async (req, object) => {
    try {
      req.session.myData = object;
      return true;
    } catch (error) {
      console.error("Unable to set object to session", error);
      return false;
    }
  }
  
  // Get data from the session
  const getFromSession = async (req, wantedData) => {
    try {
      if(req.session.myData){
        const data = await req.session.myData; 
        if (!data) {
            return null;
          }
          const wanted = data[wantedData];
          return wanted;
      }else{
        return null;
      }

    } catch (error) {
      console.error("Unable to get wanted object from session", error);
      return null;
    }
  }
  


module.exports = {setToSession, getFromSession}