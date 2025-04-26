# Network Programming

Welcome to the Network Programming section! Learn about different networking concepts and implementations.

:::tip 💡 Quick Tip
Always handle errors appropriately in your network requests to ensure a robust application.
:::

## API Examples

Here are examples of making HTTP requests in different programming languages:

:::javascript
### JavaScript Examples
::: code-group
```js [fetch]
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

```js [axios]
import axios from 'axios';

async function fetchData() {
  try {
    const { data } = await axios.get('https://api.example.com/data');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```
:::
:::

:::python
### Python Examples
```python
import requests

def fetch_data():
    try:
        response = requests.get('https://api.example.com/data')
        return response.json()
    except requests.RequestException as e:
        print(f"Error fetching data: {e}")
        return None
```
:::

:::java
### Java Examples
```java
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

class ApiClient {
    private final HttpClient client = HttpClient.newHttpClient();

    public String fetchData() {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.example.com/data"))
                .build();
            
            HttpResponse<String> response = client.send(request, 
                HttpResponse.BodyHandlers.ofString());
            
            return response.body();
        } catch (Exception e) {
            System.err.println("Error fetching data: " + e.getMessage());
            return null;
        }
    }
}
```
:::

:::cpp
### C++ Examples
```cpp
#include <curl/curl.h>
#include <string>

size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* userp) {
    userp->append((char*)contents, size * nmemb);
    return size * nmemb;
}

std::string fetchData() {
    CURL* curl = curl_easy_init();
    std::string response;

    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "https://api.example.com/data");
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

        CURLcode res = curl_easy_perform(curl);
        
        if(res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n",
                    curl_easy_strerror(res));
        }

        curl_easy_cleanup(curl);
    }

    return response;
}
```
:::

:::go
### Go Examples
```go
package main

import (
    "io/ioutil"
    "net/http"
    "log"
)

func fetchData() ([]byte, error) {
    resp, err := http.Get("https://api.example.com/data")
    if err != nil {
        log.Printf("Error making request: %v", err)
        return nil, err
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        log.Printf("Error reading response: %v", err)
        return nil, err
    }

    return body, nil
}
```
:::

:::rust
### Rust Examples
```rust
use reqwest;
use serde_json::Value;

async fn fetch_data() -> Result<Value, reqwest::Error> {
    let response = reqwest::get("https://api.example.com/data")
        .await?
        .json::<Value>()
        .await?;
    
    Ok(response)
}
```
:::

:::warning ⚠️ Important
Always validate your API responses and handle errors appropriately across all languages.
:::

## GraphQL Examples

:::typescript
### TypeScript GraphQL Example
```typescript
import { gql, useQuery } from '@apollo/client';

interface User {
  id: string;
  name: string;
  email: string;
}

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

function UserComponent({ id }: { id: string }) {
  const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>User: {data?.user.name}</div>;
}
```
:::

## Key Topics

| Topic | Description |
|-------|-------------|
| API Design | Best practices for designing RESTful and GraphQL APIs |
| Authentication | Secure authentication methods and implementation |
| Error Handling | Strategies for handling network errors gracefully |
| Performance | Optimization techniques for network requests |

:::info 📚 Reference
For more detailed information about network programming, check out the [official documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
:::