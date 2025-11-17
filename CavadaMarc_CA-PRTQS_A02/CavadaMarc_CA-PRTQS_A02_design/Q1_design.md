
# Assignment 2 – Design Documentation
by Marc Cavada

⸻
⸻

## Q1 – Customer LINQ Mini App

### Class Diagram

```mermaid
classDiagram
    class Fibonacci {
        +int Position
        +int Value
        +ComputeValue() : int
        +++() : Fibonacci
        ++(int m) : Fibonacci
    }
```

### Flowchart

```mermaid
flowchart TD
    A[Start] --> B[Display commands: list, findbyid, findbyfirstname, sortbyfirstname, exit]
    B --> C[User enters command]
    C -->|list| D[Print all customers]
    C -->|findbyid| E[Search by Id]
    E --> F{Found?}
    F -->|Yes| G[Print first and last name]
    F -->|No| H[Customer does not exist]
    C -->|findbyfirstname| I[Search by FirstName]
    I --> J[Print DateOfBirth]
    C -->|sortbyfirstname| K[Sort by FirstName and print list]
    C -->|exit| L[End]
```

⸻
## Q2 – Customer LINQ Mini App

### Class Diagram

```mermaid
classDiagram
    class ItemName {
        +int Id
        +string Iname
        +int SNo
    }

    class ItemPrice {
        +int Id
        +double Price
    }
```

### Flowchart

```mermaid
flowchart TD
    A[Start] --> B[Load ItemName and ItemPrice lists]
    B --> C[Join lists on Id]
    C --> D[Print all items with prices]
    D --> E[Prompt user to enter item name]
    E --> F[Lookup price for entered item name]
    F --> G[Print price]
    G --> H[End]
```

⸻
## Q3 – Fibonacci with Operator Overloading

### Class Diagram

```mermaid
classDiagram
    class Fibonacci {
        +int Position
        +int Value
        +ComputeValue() : int
        +++() : Fibonacci
        ++(int m) : Fibonacci
    }
```

### Flowchart

```mermaid
flowchart TD
    A[Start] --> B[Prompt user for n]
    B --> C[Compute F(n)]
    C --> D[Apply ++ operator to get F(n+1)]
    D --> E[Apply +m operator to get F(n+m)]
    E --> F[Print results]
    F --> G[End]
```

⸻
## Q4 – File Copy

### Flowchart

```mermaid
flowchart TD
    A[Start] --> B[Prompt for source file path]
    B --> C{Does source file exist?}
    C -->|No| D[Print error message and End]
    C -->|Yes| E[Prompt for destination file path]
    E --> F[Copy contents from source to destination]
    F --> G[Print success message]
    G --> H[End]
```






