provider "aws" {
  region  = var.aws_region
  profile = var.profile
}

terraform {
  backend "s3" {
    # no variables in backend definition
    region  = "us-east-1" 
    bucket  = "<BACKEND BUCKET NAME>"
    key     = "<COMPANY>/<PROJECT>/terraform.tfstate"
    profile = "default"
    encrypt        = "true"
    dynamodb_table = "<BACKEND DYNAMO DB TABLE"
  }

  required_version = "~> 0.15.1"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

module "example_lambdas" {
  source         = "./terraform-modules/lambdas"
  bucket_name    = var.bucket_name

  example_function_name = "example"

  # Environment variables required by lambdas
  env = {
    example         = "example"
  }
}