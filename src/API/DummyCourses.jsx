// import excel from "/IMG"

export const fakeFetchCourses = (url) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(url === "www.courses"){
                resolve({
                  status: 200,
                  message: "Success",
                  data: {
                    courses: [
                      {
                        id: 1,
                        thumbnail: "http://surl.li/rhsiz",
                        course_name: "OS-CIT",
                        category: "Computer",
                      },
                      {
                        id: 2,
                        thumbnail: "https://shorturl.at/bvz29",
                        course_name: "OS-CIT 'A'",
                        category: "Computer",
                      },
                      {
                        id: 3,
                        thumbnail: "https://shorturl.at/rAY58",
                        course_name: "OS-CIT 'A+'",
                        category: "Computer",
                      },
                      {
                        id: 4,
                        thumbnail: "http://surl.li/rhsku",
                        course_name: "MS-Excel",
                        category: "MS-Office",
                      },
                      {
                        id: 5,
                        thumbnail: "http://surl.li/rhslp",
                        course_name: "Photoshop",
                        category: "Design",
                      },
                      {
                        id: 6,
                        thumbnail: "http://surl.li/rhsmk",
                        course_name: "Tally with GST",
                        category: "Account",
                      },
                      {
                        id: 7,
                        thumbnail: "https://rb.gy/rru7o3",
                        course_name: "C",
                        category: "Programming",
                      },
                      {
                        id: 8,
                        thumbnail: "https://rb.gy/eazp5k",
                        course_name: "C++",
                        category: "Programming",
                      },
                      {
                        id: 9,
                        thumbnail: "http://surl.li/rhsmy",
                        course_name: "JAVA",
                        category: "Programming",
                      },
                      {
                        id: 10,
                        thumbnail: "http://surl.li/rhsnt",
                        course_name: "Blender",
                        category: "Design",
                      },
                      {
                        id: 11,
                        thumbnail: "https://shorturl.at/etyRU",
                        course_name: "Advanced Excel",
                        category: "MS-Office",
                      },
                      {
                        id: 12,
                        thumbnail: "https://shorturl.at/JRX23",
                        course_name: "PowerPoint",
                        category: "MS-Office",
                      },
                      {
                        id: 13,
                        thumbnail: "https://shorturl.at/pABJO",
                        course_name: "MS-Word",
                        category: "MS-Office",
                      },
                    ],
                  },
                });
            } else {
                reject({
                    status: 404,
                    message: "Courses not found."
                })
            }
        },2000)
    })
} 