tt = {
    timetable: {
        "monday": {
            period: [
                    {
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS",
                        subject_name:"computer network and security",
                        staff: ["KSS","SA"]
                    }

                ,
                
                    {
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS"
                    }

                , {
                     
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS"
                    }
                    , {
                     
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS"
                    }

                    , {
                     
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS"
                    }

                    , {
                     
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS"
                    }

                    , {
                     
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS"
                    }
                    , {
                     
                        starttime: "9.00am",
                        endtime: "9.50am",
                        subject: "CNS"
                    }


                
            ]
        }
    }
}
console.log(tt.timetable.monday.period[6].endtime);
// timetable>day>period>subject