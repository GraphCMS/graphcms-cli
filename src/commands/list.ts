import fetchGraphcmsExamples from "../utils/fetchGraphcmsExamples";

export default async function list() {
  const examples = await fetchGraphcmsExamples();

  console.log(
    examples.tree
      .map((template) => template.path)
      .filter((templateName) => templateName.match(/uix|with|using/))
      .join("\n")
  );
}
