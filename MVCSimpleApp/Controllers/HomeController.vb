Imports System.Web.Mvc

Namespace Controllers
    Public Class HomeController
        Inherits Controller

        ' GET: Home
        Function Index() As ActionResult
            Return View()
        End Function

        Function Greet(Optional id As String = "en-us") As ActionResult
            Dim model As New Greeting With {.Language = id}
            Return View(model)
        End Function
    End Class
End Namespace