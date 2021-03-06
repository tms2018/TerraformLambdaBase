provider "aws" {
  region = "us-east-1"
  profile = "default"
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "<UNIQUE BUCKET NAME>"

  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_dynamodb_table" "terraform_locks" {
  name = "<DYNAMO DB LOCKS TABLE>"
  billing_mode = "PAY_PER_REQUEST"
  hash_key   = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}