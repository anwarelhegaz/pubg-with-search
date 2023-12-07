import PropTypes from 'prop-types';
import './Pagination.css'

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    // const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <nav className='pagination-nav ' aria-label="Page navigation example">
            <ul className="pagination justify-content-center scroll-scale">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <div className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>السابق</div>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <div className="page-link" onClick={() => setCurrentPage(number)}>
                            {number}
                        </div>
                    </li>
                ))}
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                    <div className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>التالي</div>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
