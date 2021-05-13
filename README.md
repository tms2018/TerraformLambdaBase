# Appointment Reminders

Relatient appointment reminder system v3.5

## Terraform

### Terraform Backend Setup

Deploy the terraform resources in `terraform-modules/backend-setup` first. This will set up an S3 bucket for shared terraform state and a Dynamo DB table for locking the state file during changes. This only needs to be done once and can be reused for multiple projects.

Finally, in the root of the project, copy the bucket and db names to the backend resource in `main.tf`, specify an object key name for the state file, and initialize terraform.

```bash
terraform init
```

Once the backend is deployed (or if using a prexisting one) and the base project is configured to use it, the `terraform-modules/backend-setup` folder can be deleted.

### Deploy

```json
tarraform plan
tarraform apply
```

## Testing

```bash
npm run test
```
