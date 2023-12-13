import { Link } from "react-router-dom";

export const Snacklist = () => {
  // Array of snack objects with names and routes
  const snacks = [
    { name: "Amlou", route: "/amlou" },
    { name: "Flatpan", route: "/flatpan" },
    { name: "Peppermint", route: "/peppermint" },
    // Add more snacks as needed
  ];

  return (
    <ul>
      {snacks.map((snack) => (
        <li key={snack.name}>
          <Link to={snack.route}>{snack.name}</Link>
        </li>
      ))}
    </ul>
  );
};
