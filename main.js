    // tạo ra mảng mới như sau:
    // studentGroupByClasses = [
    // classId: 11,
    // className: '.net',
    // students: [{id: 1, name: 'tran van a', className: '.net', classId:11},
    //             {id: 2, name: 'tran van b', className: '.net', classId:11}],
    
    // classId: 12,
    // className: 'angular',
    // students: [{id: 3, name: 'tran van c', className: 'angular', classId:12},
    //              {id: 4, name: 'tran van d', className: 'angular', classId:12}],
    
    // classId: 13,
    // className: 'java',
    // students: [{id: 5, name: 'tran van e', className: 'java', classId:13},
    //              {id: 6, name: 'tran van f', className: 'java', classId:13},
    //              {id: 7, name: 'tran van g', className: 'java', classId:13}],
    
    // classId: 14,
    // className: 'test',
    // students: [{id: 8, name: 'tran van h', className: 'test', classId:14},
                // {id: 9, name: 'tran van i', className: 'test', classId:14},
                // {id: 10, name: 'tran van j', className: 'test', classId:14}]
    // ]

const students_list = [
    {id: 1, name: 'tran van a', className: '.net', classId:11},
    {id: 2, name: 'tran van b', className: '.net', classId:11},
    {id: 3, name: 'tran van c', className: 'angular', classId:12},
    {id: 4, name: 'tran van d', className: 'angular', classId:12},
    {id: 5, name: 'tran van e', className: 'java', classId:13},
    {id: 6, name: 'tran van f', className: 'java', classId:13},
    {id: 7, name: 'tran van g', className: 'java', classId:13},
    {id: 8, name: 'tran van h', className: 'test', classId:14},
    {id: 9, name: 'tran van i', className: 'test', classId:14},
    {id: 10, name: 'tran van j', className: 'test', classId:14},
    {id: 11, name: 'asd', className: '.net', classId: 15}
]

// single key
const studentByClass = students_list.reduce((acc, value, index) => {
    let keys = value.classId.toString() + value.className.toString();
    // let a = value.classId
    // console.log(a)
    acc[keys] = acc[keys] || {
        classId: value.classId,
        className: value.className,
        student:[]
    };
    acc[keys].student.push({
        id: students_list[index].id,
        name: students_list[index].name,
        classId: students_list[index].classId,
        className: students_list[index].className,
        
    });
    // console.log(typeof (acc[key]));
    // console.log(typeof (students_list[index]));
    // console.log(acc[keys].student.push);
    return acc;
}, {})


console.log(studentByClass);
    
// multiple keys
