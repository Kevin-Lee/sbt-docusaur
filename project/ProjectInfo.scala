import wartremover.{Wart, Warts}

object ProjectInfo {

  val commonWarts: Seq[Wart] =
    Warts.allBut(
        Wart.DefaultArguments
      , Wart.Overloading
      , Wart.Any
      , Wart.Nothing
      , Wart.NonUnitStatements
    )

}
