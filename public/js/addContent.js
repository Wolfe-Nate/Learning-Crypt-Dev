//prevent event spread? Right term?
const newContentHandler = async (event) => {
  event.preventDefault();

  // IDs to get values from input boxes
  const content_url = document.querySelector("#content_url").value.trim();
  const content_title = document.querySelector("#content_title").value.trim();
  const content_desc = document.querySelector("#content_desc").value.trim();

  // send fetch requst to our API
  if (content_url && content_title && content_desc) {
    const response = await fetch("/api/content", {
      method: "POST",
      body: JSON.stringify({
        content_url,
        content_title,
        content_desc,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if article is added correctly, the 'all' template will be rendered?
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add article");
    }
  }
};

//
document
  .querySelector(".new-article-form")
  .addEventListener("submit", newContentHandler);
