import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Button from '../Button';

ReactModal.setAppElement('#root');

function ItemCard({ item, cpCode }) {
    const [quantity, setQuantity] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); 

    function submit() {
        // Lógica para adicionar ao carrinho com os dados do item e o tamanho selecionado
        // Exemplo: addToCart({ ...item, quantity, selectedSize: selected });
        closeModal();
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    // Verifica se o item corresponde ao termo de pesquisa
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return (
        <div className='relative w-80 bg-white p-4 rounded-lg flex flex-col justify-between'>
            {matchesSearch && (
                <>
                    <img
                        className='h-56 w-auto max-w-full object-contain rounded cursor-pointer'
                        src={item.imageUrl}
                        alt={item.name}
                        onClick={openModal}
                    />

                    <h1 className='text-md text-slate-700 font-semibold mt-2'>{item.name}</h1>
                    <p className='text-xs text-slate-600'>{item.description}</p>

                    <div className='flex justify-between items-center mt-5'>
                        <div className='flex flex-col items-end'>
                            <p className='text-lg text-black font-medium'>
                                {item.price?.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </p>
                        </div>
                    </div>
                </>
            )}

            {/* Ações */}
            <div className='flex justify-between mt-4'>
                {/* Quantidade */}
                <div className='flex gap-2 items-center'>
                    <button
                        onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                        className='border-2 border-black rounded w-8 h-8 hover:bg-red-500 flex items-center justify-center'
                    >
                        <p className='text-black'>-</p>
                    </button>
                    <p>{quantity}</p>
                    <button
                        onClick={() =>
                            quantity < item.quantityAvaiable && setQuantity(quantity + 1)
                        }
                        className='border-2 border-black rounded w-8 h-8 hover:bg-green-600 flex items-center justify-center'
                    >
                        <p className='text-black'>+</p>
                    </button>
                </div>

                <Button
                    className='bg-black rounded px-3 py-1 text-slate-800 font-semibold text-xs cursor-pointer hover:bg-green-600'
                    onClick={submit}
                >
                    <p className='text-white'>Adicionar +</p>
                </Button>
            </div>

            {/* Modal */}
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Product Modal"
                className="modal"
                overlayClassName="overlay"
                style={{
                    content: {
                        width: '800px',
                        height: '800px',
                        margin: 'auto'
                    }
                }}
            >
                <div className='flex items-center justify-center h-full'>
                    <div className='max-w-full mx-auto bg-white p-6 rounded-lg overflow-hidden flex'>
                        <img className='h-200 w-auto object-contain border border-black rounded' src={item.imageUrl} alt={item.name}></img>

                        <div className='flex flex-col ml-4'>
                            <h1 className='text-md text-slate-700 font-semibold'>{item.name}</h1>
                            <p className='text-xs text-slate-600 mt-1'>{item.description}</p>
                            <p className='text-lg text-black font-medium mt-2'>
                                {item.price?.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </p>

                            {/* Quantidade */}
                            <div className='flex gap-2 items-center mt-4'>
                                <button onClick={() => quantity > 0 && setQuantity(quantity - 1)} className='border-2 border-black rounded w-8 h-8 hover:bg-red-500 flex items-center justify-center'><p className='text-black'>-</p></button>
                                <p className='text-black'>{quantity}</p>
                                <button onClick={() => quantity < item.quantityAvaiable && setQuantity(quantity + 1)} className='border-2 border-black rounded w-8 h-8 hover:bg-green-600 flex items-center justify-center'><p className='text-black'>+</p></button>
                            </div>

                            {/* Seleção de tamanho */}
                            <div className='flex gap-2 items-center mt-2'>
                                <button
                                    className={`bg-gray-200 text-black rounded px-3 py-1 text-xs cursor-pointer hover:bg-gray-400 ${selected === 'P' ? 'bg-black text-white' : ''}`}
                                    onClick={() => setSelected('P')}
                                >
                                    P
                                </button>
                                <button
                                    className={`bg-gray-200 text-black rounded px-3 py-1 text-xs cursor-pointer hover:bg-gray-400 ${selected === 'M' ? 'bg-black text-white' : ''}`}
                                    onClick={() => setSelected('M')}
                                >
                                    M
                                </button>
                                <button
                                    className={`bg-gray-200 text-black rounded px-3 py-1 text-xs cursor-pointer hover:bg-gray-400 ${selected === 'G' ? 'bg-black text-white' : ''}`}
                                    onClick={() => setSelected('G')}
                                >
                                    G
                                </button>
                            </div>

                            {/* Botão de adicionar ao carrinho */}
                            <Button
                                className="bg-black rounded px-6 py-2 text-slate-800 font-semibold text-sm cursor-pointer hover:bg-green-600 mt-4"
                                onClick={submit}
                            >
                                <p className='text-white'>Adicionar +</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default ItemCard;
