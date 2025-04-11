export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>
        Profile Page 
        <span className="p-2 text-green-400">{params.id}</span>
      </h1>
    </div>
  );
}
