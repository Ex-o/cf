export default {
  apiUrl: "http://codeforces.com/api/",
  userStatus: "http://codeforces.com/api/user.status",
  contestsList: "http://codeforces.com/api/contest.list",

  vcWith: function (handles, callback) {
    if (!handles || handles.length <= 0)
      return;
    console.log("Handling");
    let contests = new Set([]);
    let contestsArray = [];
    $.get(this.contestsList, {}, (data, status) => {
      data.result.filter(contest => contest.phase === "FINISHED").forEach(contest => {
        contests.add(contest.id);
        contestsArray.push({
          id: contest.id,
          name: contest.name
        });
      });
      // contests are
      // console.log(contests);
      // callback(contests);

      // now we handle the handles
      let rem = handles.length;
      for (let handle of handles) {
        $.get(this.userStatus, {
          handle: handle
        }, (data, status) => {
          --rem;
          if (data && data.result) {
            for (let sub of data.result) {
              contests.delete(sub.problem.contestId);
            }
          }
          if (rem == 0) {
            rem = -1;
            console.log("done");
            if (callback) callback(contestsArray.filter(contest => contests.has(contest.id)));
          }
        });
      }
    });
  },

  // contestWith: function (handles, callback) {
  //   let contests = [];
  //   let userSubList = [];

  //   handles.forEach(handle => console.log(handle));

  //   let rem = handles.length;



  //   handles.forEach(handle => {
  //     let req = $.get(
  //       userStatus, {
  //         handle: handle
  //       },
  //       (data, status) => {
  //         rem--;
  //         if (data.status !== "OK") {
  //           console.log(handle + " has a problem!");
  //         } else {
  //           console.log(handle + " is OK!");
  //         }

  //         if (data.result.length < 1) {
  //           err_message("handleDiv", "No submissions");
  //         } else {
  //           userSubList[handle] = new Array();
  //           for (var i = data.result.length - 1; i >= 0; i--) {
  //             var sub = data.result[i];
  //             // add, sort then remove duplicates in O(n log n)
  //             // or use a set
  //             let s = new Set([]);
  //             if (!s.has(sub.problem.contestId)) {
  //               userSubList[handle].push(sub.problem.contestId);
  //               s.add(sub.problem.contestId);
  //             }
  //           }
  //         }

  //         if (rem == 0) {
  //           $.get(apiUrl + "contest.list", {}, (data, status) => {
  //             console.log(data);
  //             for (var i = data.result.length - 1; i >= 0; i--) {
  //               var contest = data.result[i];
  //               if (contest.phase === "FINISHED") contests.push(contest.id);
  //             }
  //             var validContests = [];

  //             contests.forEach(contest => {
  //               let valid = true;
  //               for (let handle of handles) {
  //                 for (let sub of userSubList[handle]) {
  //                   if (sub === contest) {
  //                     valid = false;
  //                     break;
  //                   }
  //                 }
  //                 if (!valid) break;
  //               }
  //               valid && validContests.push(contest);
  //             });

  //             console.log(contests);
  //             console.log(validContests);
  //           });
  //         }
  //         //console.log(userSubList[handle]);
  //       }
  //     ).fail((xhr, status) => {
  //       rem--;
  //       if (status != "abort") console.log(handle + " is fucked!");
  //       handles.splice(handles.indexOf(handle), 1);
  //       if (rem == 0) {
  //         $.get(apiUrl + "contest.list", {}, (data, status) => {
  //           console.log(data);
  //           for (var i = data.result.length - 1; i >= 0; i--) {
  //             var contest = data.result[i];
  //             if (contest.phase === "FINISHED") contests.push(contest.id);
  //           }
  //           var validContests = [];

  //           contests.forEach(contest => {
  //             let valid = true;
  //             for (let handle of handles) {
  //               for (let sub of userSubList[handle]) {
  //                 if (sub === contest) {
  //                   valid = false;
  //                   break;
  //                 }
  //               }
  //               if (!valid) break;
  //             }
  //             valid && validContests.push(contest);
  //           });

  //           console.log(contests);
  //           console.log(validContests);
  //         });
  //       }
  //     });
  //   });
  // }


  /*
  let apiUrl = "http://codeforces.com/api/";
  let userStatus = apiUrl + "user.status";


  function vcWith(handles, callback) {
    
  }

  function contestWith(handles, callback) {
    let contests = [];
    let userSubList = [];

    handles.forEach(handle => console.log(handle));

    let rem = handles.length;



    handles.forEach(handle => {
      let req = $.get(
        userStatus, {
          handle: handle
        },
        (data, status) => {
          rem--;
          if (data.status !== "OK") {
            console.log(handle + " has a problem!");
          } else {
            console.log(handle + " is OK!");
          }

          if (data.result.length < 1) {
            err_message("handleDiv", "No submissions");
          } else {
            userSubList[handle] = new Array();
            for (var i = data.result.length - 1; i >= 0; i--) {
              var sub = data.result[i];
              // add, sort then remove duplicates in O(n log n)
              // or use a set
              let s = new Set([]);
              if (!s.has(sub.problem.contestId)) {
                userSubList[handle].push(sub.problem.contestId);
                s.add(sub.problem.contestId);
              }
            }
          }

          if (rem == 0) {
            $.get(apiUrl + "contest.list", {}, (data, status) => {
              console.log(data);
              for (var i = data.result.length - 1; i >= 0; i--) {
                var contest = data.result[i];
                if (contest.phase === "FINISHED") contests.push(contest.id);
              }
              var validContests = [];

              contests.forEach(contest => {
                let valid = true;
                for (let handle of handles) {
                  for (let sub of userSubList[handle]) {
                    if (sub === contest) {
                      valid = false;
                      break;
                    }
                  }
                  if (!valid) break;
                }
                valid && validContests.push(contest);
              });

              console.log(contests);
              console.log(validContests);
            });
          }
          //console.log(userSubList[handle]);
        }
      ).fail((xhr, status) => {
        rem--;
        if (status != "abort") console.log(handle + " is fucked!");
        handles.splice(handles.indexOf(handle), 1);
        if (rem == 0) {
          $.get(apiUrl + "contest.list", {}, (data, status) => {
            console.log(data);
            for (var i = data.result.length - 1; i >= 0; i--) {
              var contest = data.result[i];
              if (contest.phase === "FINISHED") contests.push(contest.id);
            }
            var validContests = [];

            contests.forEach(contest => {
              let valid = true;
              for (let handle of handles) {
                for (let sub of userSubList[handle]) {
                  if (sub === contest) {
                    valid = false;
                    break;
                  }
                }
                if (!valid) break;
              }
              valid && validContests.push(contest);
            });

            console.log(contests);
            console.log(validContests);
          });
        }
      });
    });
  }

  */
}
