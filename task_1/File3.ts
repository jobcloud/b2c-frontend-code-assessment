export function createComment(text: any, author, date?: Date) {
  return {
    text: text,
    author: author,
    date: date || new Date(),
  };
}

export async function loadComments(): Promise<any[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments: any = await response.json();
  return comments;
}
