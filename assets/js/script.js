var tasks = [];



var savedTasks = function()
{
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// save button
$(".saveBtn").on("click", function()
{
    var textContent = $(this)
        .closest(".row")
        .find(".description");

    var text = textContent
        .val()
        .trim();

    var index = $(this)
        .closest(".row")
        .index();

    var time = $(this)
        .closest(".row")
        .attr("id")
        .replace("hr-", "");

        
    var taskObj =
    {
        time: time,
        text: text
    }

    tasks[index] = taskObj;
    savedTasks();
});

var loadTasks = function() 
{
    tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log(tasks);
    if (!tasks) 
    {
        tasks = [];
        
    };

    for (var i = 0; i < tasks.length; i++)
    {
        if (!tasks[i])
        {
            tasks[i] = 
            {
                time: "",
                task: ""
            }
        }
    }
    
    tasks.forEach(function(task)
    {
        newTask(task.time, task.text);
    })
};

var newTask = function(taskTime, taskText)
{
    $("#hr-" + taskTime).find(".time-block").text(taskText);
};



var presentDayD = $("#currentDay");
var presentDay = moment();
var currentTime = moment().hour();


presentDayD.text(presentDay.format("MMMM Do YYYY"));

var taskTimeColor = function()
{
    $(".description").each(function()
    {
        
        if($(this).attr("id") < currentTime)
        {
            $(this).addClass("past")
        }
        else if($(this).attr("id") > currentTime)
        {
            $(this).addClass("future")
        }
        else
        {
            $(this).addClass("present")
        }
        
    })
};

setInterval(taskTimeColor, (1000 * 60) * 5);

taskTimeColor()
loadTasks()