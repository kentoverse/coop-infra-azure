using System;
using System.Collections.Generic;
using mcpserver.Models; // Make sure this namespace matches your Todo model
using mcpserver.Storage; // For TodoStore access

// AI tool for suggesting Todo items
public static class AITodoTool
{
    public static object SuggestTodo(string userInput)
    {
        var todo = new Todo
        {
            Id = GenerateNextId(),
            Title = ExtractTitle(userInput)
        };

        // Check for missing fields
        var missingFields = new List<string>();
        if (string.IsNullOrWhiteSpace(todo.Title)) missingFields.Add("Title");

        if (missingFields.Count > 0)
        {
            return new
            {
                Todo = todo,
                MissingFields = missingFields,
                Prompt = $"Please provide the following missing information: {string.Join(", ", missingFields)}"
            };
        }

        // Add to TodoStore
        TodoStore.Todos.Add(todo);

        return new
        {
            Todo = todo,
            MissingFields = Array.Empty<string>(),
            Prompt = "Todo added successfully."
        };
    }

    private static int GenerateNextId()
    {
        // Simple auto-increment based on current store
        return TodoStore.Todos.Count > 0 
            ? TodoStore.Todos[^1].Id + 1 
            : 1;
    }

    // Placeholder method for AI extraction logic
    private static string ExtractTitle(string input)
    {
        // Simple heuristic; replace with AI/NLP logic if needed
        return !string.IsNullOrWhiteSpace(input) ? input : "";
    }
}