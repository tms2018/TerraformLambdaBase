resource "aws_cloudwatch_event_rule" "run_example_event_rule" {
  name_prefix = "Example"
  description = "Runs the example lambda"

  schedule_expression = "rate(2 minutes)"
}

resource "aws_cloudwatch_event_target" "example_lambda_target" {
  rule      = aws_cloudwatch_event_rule.run_example_event_rule.name
  target_id = "Example_Lambda"
  arn       = aws_lambda_function.example_lambda.arn
}

resource "aws_lambda_permission" "allow_eventbridge_to_call_example" {
  statement_id  = "AllowexecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.example_lambda.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.run_example_event_rule.arn
}