var tasks = [];

var savedTasks = function()
{
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// save button
$(".saveBtn").on("click", function()
{
    var textContent = $(this).closest(".row").find(".description");

    var text = textContent
        .val()
        .trim();

    var index = $(this)
        .closest(".row")
        .index();

    var taskTime = $(this)
        .closest(".row")
        .attr("id")
        .replace("hr-", "");

    var taskObj =
    {
        time: taskTime,
        task: text
    }

    tasks[index] = taskObj;
    savedTasks();
});