export const walletConfig = {
    allWithdrawalPage: {
        title: "All Withdrawal Amounts",
        tableHeader: [
            "Date & Time",
            "Amount",
            "Mode of Withdrawal",
            "Status"
        ],
        tableData: [
            ["2022-01-01 10:00 AM", "500", "0000@ylb", "Success"],
            ["2022-01-02 11:30 AM", "1000", "0000@jkl", "Pending"],
            ["2022-01-03 12:45 PM", "750", "0000@mkn", "Failed"],
            ["2022-01-04 02:15 PM", "1500", "1234@abc", "Success"],
            ["2022-01-05 09:30 AM", "800", "5678@def", "Pending"],
            ["2022-01-06 11:00 AM", "1200", "9012@ghi", "Failed"],
            ["2022-01-07 01:45 PM", "650", "3456@jkl", "Success"],
            ["2022-01-08 03:30 PM", "950", "7890@mno", "Failed"],
            ["2022-01-09 10:20 AM", "1100", "1122@pqr", "Pending"],
            ["2022-01-10 04:45 PM", "700", "3344@stu", "Success"],
            ["2022-01-11 08:15 AM", "900", "5566@vwx", "Pending"],
            ["2022-01-12 12:00 PM", "1300", "7788@yz", "Failed"],
            ["2022-01-13 02:30 PM", "1400", "9900@abc", "Success"],
            ["2022-01-14 09:45 AM", "600", "1112@def", "Failed"],
            ["2022-01-15 03:15 PM", "850", "3334@ghi", "Pending"],
            ["2022-01-16 07:30 AM", "1250", "5556@jkl", "Success"],
            ["2022-01-17 10:10 AM", "1350", "7778@mno", "Pending"],
            ["2022-01-18 05:25 PM", "950", "9990@pqr", "Failed"],
            ["2022-01-19 01:00 PM", "400", "1212@stu", "Success"],
            ["2022-01-20 11:50 AM", "1700", "3434@vwx", "Pending"],
        ]
        
    },
    allTransactionsPage:{
        title: "All Transactions",
        tableHeader: [
            "Sl No.",
            "Date & Time",
            "Amount",
            "Email Id",
            "Mobile Number",
            "product",
            "Mode of Payment",
            "Status"
        ],
        tableData: [
            [1, "2022-01-01 10:00 AM", "500", "john@example.com", "1234567890", "Product A", "Credit Card", "Success"],
            [2, "2022-01-02 11:30 AM", "1000", "jane@example.com", "9876543210", "Product B", "PayPal", "Failed"],
            [3, "2022-01-03 12:45 PM", "750", "manish@example.com", "9876543210", "Product C", "Google Pay", "Pending"],
        ]
    }
}