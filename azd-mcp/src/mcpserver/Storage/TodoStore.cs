// Storage/TodoStore.cs
using System.Collections.Generic;
using mcpserver.Models;

namespace mcpserver.Storage
{
    public static class TodoStore
    {
        public static List<Todo> Todos { get; } = new List<Todo>();
    }
}