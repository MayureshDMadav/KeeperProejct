import { useState } from "react";
import {X} from 'lucide-react'

export const NoteCard = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    content: note.content,
  });

  const handleSave = () => {
    if (!editedNote.title.trim() && !editedNote.content.trim()) {
      alert("Please enter a title or content for your note!");
      return;
    }

    const updatedNote = {
      title: editedNote.title.trim() || "Untitled",
      content: editedNote.content,
    };
    onUpdate(note.id, updatedNote);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedNote({ title: note.title, content: note.content });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative group">
      {!isEditing ? (
        <div className="p-4 cursor-pointer" onClick={() => setIsEditing(true)}>
          <h3 className="font-semibold text-gray-800 mb-2 break-words">
            {note.title}
          </h3>
          <p className="text-gray-600 text-sm whitespace-pre-wrap break-words">
            {note.content}
          </p>
        </div>
      ) : (
        <div className="p-4">
          <input
            type="text"
            value={editedNote.title}
            onChange={(e) =>
              setEditedNote({ ...editedNote, title: e.target.value })
            }
            className="w-full font-semibold text-gray-800 mb-2 outline-none border-b border-gray-200 pb-1"
          />
          <textarea
            value={editedNote.content}
            onChange={(e) =>
              setEditedNote({ ...editedNote, content: e.target.value })
            }
            className="w-full text-gray-600 text-sm outline-none resize-none h-20"
          />
          <div className="flex justify-end mt-3 space-x-2">
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1 text-xs bg-yellow-400 hover:bg-yellow-500 text-white rounded transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(note.id);
        }}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
      >
        <X size={12} />
      </button>
    </div>
  );
};
