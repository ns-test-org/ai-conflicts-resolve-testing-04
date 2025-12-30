export default function ChristmasLanding() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Todo App v2
        </h1>
        <p className="text-gray-400 text-center mb-8">
          {activeTodos} {activeTodos === 1 ? 'task' : 'tasks'} remaining
        </p>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 border-2 border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
          />
          <button
            onClick={addTodo}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
=======
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-green-900 to-red-950">
      {/* Snowflakes Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
>>>>>>> 1528bac (Merge thread: Build Christmas Landing Page)
          >
            ❄
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-8xl mb-6 animate-bounce">🎄</div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Merry Christmas
          </h1>
          <p className="text-2xl md:text-3xl text-red-200 mb-8 font-light">
            Wishing you joy, peace, and happiness this holiday season
          </p>
          <button className="bg-white text-red-900 px-10 py-4 rounded-full text-xl font-bold hover:bg-red-100 transition-all transform hover:scale-105 shadow-2xl">
            Celebrate with Us 🎅
          </button>
        </div>

<<<<<<< HEAD
        {/* Todo List */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No tasks yet. Add one to get started!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 cursor-pointer accent-purple-500"
                />
                <span
                  className={`flex-1 text-white ${
                    todo.completed ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 font-semibold transition-opacity"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Clear Completed */}
        {todos.some(todo => todo.completed) && (
          <button
            onClick={() => setTodos(todos.filter(todo => !todo.completed))}
            className="mt-6 w-full py-2 text-gray-400 hover:text-red-400 font-medium transition-colors"
          >
            Clear completed tasks
          </button>
        )}
=======
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-white mb-3">Special Gifts</h3>
            <p className="text-red-100">
              Discover amazing presents for your loved ones this Christmas season
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-white mb-3">Holiday Magic</h3>
            <p className="text-red-100">
              Experience the wonder and enchantment of the Christmas spirit
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="text-6xl mb-4">🔔</div>
            <h3 className="text-2xl font-bold text-white mb-3">Joyful Moments</h3>
            <p className="text-red-100">
              Create unforgettable memories with family and friends
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-600 to-red-600 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Christmas Celebration! 🎉
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Sign up now and receive exclusive holiday offers and festive updates
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full w-full md:w-96 text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-white/70">
          <p className="text-lg mb-2">🎄 Happy Holidays from Our Family to Yours 🎄</p>
          <p className="text-sm">© 2024 Christmas Celebration. All rights reserved.</p>
        </div>
>>>>>>> 1528bac (Merge thread: Build Christmas Landing Page)
      </div>
    </div>
  );
}


