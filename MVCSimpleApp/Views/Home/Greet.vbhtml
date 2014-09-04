@ModelType Greeting
@Code
    ViewData("Title") = "Greet"
End Code

<h2>Greet</h2>
<div>
    @Html.DisplayName(Model.Greeting()) World!
</div>
