Public Class Greeting
    Public Property Language As String = "en-us"
    Public Function Greeting() As String
        Select Case Me.Language
            Case "en-us"
                Return "Hi"
            Case "en-uk"
                Return "Cheerio"
            Case "en-au"
                Return "G'Day"
            Case Else
                Return "Hello"
        End Select
    End Function
End Class
