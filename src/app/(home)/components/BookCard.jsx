import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <div className="relative h-15 w-32">
        <Image
          src={book.cover}
          alt={book.title}
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "auto", height: "9rem" }}
          className="rounded-md"
        />
      </div>
      <div>
        <h2 className="line-clamp-3 text-l font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="font-italic text-primary-900 mt-1">{book.author.name}</p>
        <Link
          href={`/book/${book._id}`}
          className="py-1 px-2 rounded border border-primary-500 mt-4 inline-block text-primary-500 font-medium text-sm
                    hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;