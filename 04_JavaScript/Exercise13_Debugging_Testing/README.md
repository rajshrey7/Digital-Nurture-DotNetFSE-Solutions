# Debugging and Testing

## Chrome DevTools Console

1. Open Chrome Browser
2. Press F12
3. Open Console Tab
4. Verify:

Form submission started
Name
Email
Payload
Server Response

## Breakpoints

1. Open Sources Tab
2. Open main.js
3. Click line number beside:

const userData = {
    name,
    email
};

4. Submit form
5. Execution pauses at breakpoint

## Network Tab

1. Open DevTools
2. Open Network Tab
3. Submit Form
4. Select POST Request

Verify:

Request Method: POST

Payload:

{
  "name":"..."
  "email":"..."
}

Status Code: 201