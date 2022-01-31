import { useState } from "react";
import Markdown from "../components/Markdown";

const CreatePost = () => {
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const [content, setContent] = useState("");
  return (
    <section className="container mx-auto grid grid-cols-2 my-16">
      <h1 className="text-center col-span-2">Create Post Page</h1>
      <CreatePostForm contentHandler={contentHandler} />
      <div className="border p-4 my-4">
        <Markdown content={content} />
      </div>
    </section>
  );
};

const CreatePostForm = ({ contentHandler }) => {
  return (
    <form className="border my-4 p-4">
      <div className="flex py-2  gap-4 items-center">
        <label htmlFor="slug" className="text-slate-600 min-w-[100px]">
          Slug
        </label>
        <input
          type="text"
          name="slug"
          id="slug"
          className="border w-full p-2"
          placeholder="example-post"
          required
        />
      </div>

      <div className="flex py-2  gap-4 items-center">
        <label htmlFor="title" className="text-slate-600 min-w-[100px]">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border w-full p-2"
          placeholder="Example Title"
          required
        />
      </div>

      <div className="flex py-2  gap-4 items-center">
        <label htmlFor="createdAt" className="text-slate-600 min-w-[100px]">
          CreatedAt
        </label>
        <input
          type="text"
          name="createdAt"
          id="createdAt"
          className="border w-full p-2"
          placeholder={new Date().toLocaleDateString()}
        />
      </div>

      <div className="flex py-2 gap-4 items-center">
        <label htmlFor="category" className="text-slate-600 min-w-[100px]">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          className="border w-full p-2"
          placeholder="Frontend"
          required
        />
      </div>

      <div className="flex py-2 gap-4 items-center">
        <label htmlFor="image" className="text-slate-600 min-w-[100px]">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          id="image"
          className="border w-full p-2"
          placeholder="https://res.cloudinary.com/example.png"
          required
        />
      </div>

      <div className="flex py-2 gap-4 items-center">
        <label htmlFor="image" className="text-slate-600 min-w-[100px]">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          rows={5}
          className="w-full border text-slate-600 p-2 min-h-min min-h-fit"
          placeholder="Write your content here"
          onChange={contentHandler}
        ></textarea>
      </div>
    </form>
  );
};

export default CreatePost;
