export const getstudentdata = async (credentials) => {
    try {
        console.log("trying to make request");
        const response = await fetch("http://localhost:8000/studentdata", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials })
        });

        const averageMarks = await response.json();
        let avg = averageMarks.user[0].AverageMarks;
        let subject = averageMarks.user[0].Marks;
        let ans = [avg, subject, averageMarks.user[2], averageMarks.user[3]];
        return ans;
    } catch (error) {
        console.log("error while adduser", error.message);
    }
};
