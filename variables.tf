variable "aws_region" {
  default     = "us-east-1"
  description = "AWS region"
  type        = string
}

variable "profile" {
  default     = "default"
  description = "AWS cli profile to use for AWS access"
  type        = string
}