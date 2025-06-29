import { useState } from "react";
import { Plus, X } from "lucide-react";
import { NoteCard } from "../src/component/noteCard";

export default function KeeperApp() {
  const [notes, setNotes] = useState([
    { id: 1, title: "this is title", content: "this is content" },
  ]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [isAddingNote, setIsAddingNote] = useState(false);

  const addNote = () => {
    if (!newNote.title.trim() && !newNote.content.trim()) {
      alert("Please enter a title or content for your note!");
      return;
    }

    const note = {
      id: Date.now(),
      title: newNote.title.trim() || "Untitled",
      content: newNote.content,
    };
    setNotes([...notes, note]);
    setNewNote({ title: "", content: "" });
    setIsAddingNote(false);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-4 px-6 shadow-lg">
        <h1 className="text-2xl font-bold">My Notes Project</h1>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-md mx-auto mb-8">
          {!isAddingNote ? (
            <div
              onClick={() => setIsAddingNote(true)}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <input
                type="text"
                placeholder="Take a note..."
                className="w-full text-gray-600 bg-transparent outline-none cursor-pointer"
                readOnly
              />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-4 relative">
              <input
                type="text"
                placeholder="Title"
                value={newNote.title}
                onChange={(e) =>
                  setNewNote({ ...newNote, title: e.target.value })
                }
                className="w-full text-lg font-medium mb-3 outline-none border-b border-gray-200 pb-2"
              />
              <textarea
                placeholder="Take a note..."
                value={newNote.content}
                onChange={(e) =>
                  setNewNote({ ...newNote, content: e.target.value })
                }
                className="w-full h-24 outline-none resize-none"
              />
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => {
                    setIsAddingNote(false);
                    setNewNote({ title: "", content: "" });
                  }}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={addNote}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center space-x-1 transition-colors"
                >
                  <Plus size={16} />
                  <span>Add</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={deleteNote}
              onUpdate={updateNote}
            />
          ))}
        </div>

        {notes.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            <p className="text-lg">No notes yet. Create your first note!</p>
          </div>
        )}

        <div className="text-center text-gray-400 text-sm mt-16">
          Copyright © 2024
        </div>
      </div>
    </div>
  );
}
