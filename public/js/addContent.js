//prevent event spread? Right term?
async function newContentHandler(event) {
  event.preventDefault();

  // get values from input boxes
  const content_url = document.querySelector("#content_url").value;
  const content_title = document.querySelector("#content_title").value;
  const content_desc = document.querySelector("#content_desc").value;

  // send fetch requst to our API
  const response = await fetch(`/api/content`, {
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

document
  .querySelector(".new-article-form")
  .addEventListener("submit", newContentHandler);
