# Resource names
variable "bucket_name" {}
variable "example_function_name" {}

variable "env" {
  type = object({
    example = string
  })
  description = "Environment variables required for lambdas to work"
}

