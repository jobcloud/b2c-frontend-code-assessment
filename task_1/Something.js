function doSomething(type, name) {
  query(`/api/somesite/`, function (result, error) {
    if (!error) {
      let siteId = result.siteId;

      query(`/api/somesite/page1/${siteId}`, function (result, error) {
        if (!error) {
          let subject = result.subjects.find((item) => {
            return item.type === type && item.name === name;
          });

          query(
            `/api/somesite/anythingelse/${subject.id}`,
            function (result, error) {
              if (!error) {
                query(
                  `/api/do-something`,
                  { type: type, name: name },
                  function (result, error) {
                    if (!error) {
                      console.log("Call was successful");
                    } else {
                      console.log("Call failed");
                    }
                  }
                );
              }
            }
          );
        }
      });
    }
  });
}

doSomething("type", "name");
