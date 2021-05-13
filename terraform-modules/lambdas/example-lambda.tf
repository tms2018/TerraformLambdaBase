data "archive_file" "example_zip" {
  type        = "zip"
  source_file = "dist/example/index.js"
  output_path = "dist/${var.example_function_name}.zip"
}

resource "aws_iam_role" "example_lambda_role" {
  name = "${var.example_function_name}_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "example_lambda_role_policy" {
  name = "${var.example_function_name}_role_policy"
  role = aws_iam_role.example_lambda_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ]
        Effect   = "Allow"
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}

resource "aws_lambda_function" "example_lambda" {
  filename         = "dist/${var.example_function_name}.zip"
  function_name    = var.example_function_name
  role             = aws_iam_role.example_lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  timeout          = 60
  source_code_hash = data.archive_file.example_zip.output_base64sha256

  environment {
    variables = {
      EXAMPLE       = var.env.example
    }
  }
}
