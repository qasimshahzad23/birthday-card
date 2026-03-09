const BirthdayCard = ({ name }) => (
    <div className="w-full max-w-4xl p-20 bg-white rounded-3xl shadow-2xl border-b-12 border-blue-500 text-center animate-pulse">
        <h1 className="text-4xl font-black text-blue-400 mb-6">🎂 HAPPY BIRTHDAY!</h1>
        <p className="text-4xl text-gray-600">
            A massive celebration wish to you  <span className="block text-6xl text-blue-500 mt-4 font-extrabold uppercase tracking-widest">    {name}</span>
        </p>
    </div>
);

export default BirthdayCard;