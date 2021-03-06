import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  limparFormularioCurso,
  salvarCurso,
  setCursoCargaHoraria,
  setCursoCategoria,
  setCursoCodigo,
  setCursoDescricao,
  setCursoPreco,
} from "../../actions/cursos";

const FormularioCursos = (props) => {
  const {
    _id,
    codigo,
    descricao,
    cargaHoraria,
    preco,
    categoria,

    isCodigoValido,
    isDescricaoValido,
    isCargaHorariaValido,
    isPrecoValido,
    isCategoriaValido,

    setCursoCodigo,
    setCursoDescricao,
    setCursoCargaHoraria,
    setCursoPreco,
    setCursoCategoria,

    salvarCurso,
    limparFormularioCurso,
  } = props;

  return (
    <div className="border-right pl-3 pr-3">
      <h3 className="border-bottom">Formulário</h3>
      <form>
        <div
          className={`form-group ${!isCodigoValido ? "errorInput" : ""} row `}
        >
          <label htmlFor="codigo" className="col-sm-3 col-form-label">
            Código:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className={`form-control`}
              id="codigo"
              value={codigo}
              onChange={setCursoCodigo}
            />
          </div>
        </div>
        <div
          className={
            "form-group row " + (!isDescricaoValido ? "errorInput" : "")
          }
        >
          <label htmlFor="descrição" className="col-sm-3 col-form-label">
            Descrição:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="descricao"
              value={descricao}
              onChange={setCursoDescricao}
            />
          </div>
        </div>
        <div
          className={
            "form-group row " + (!isCargaHorariaValido ? "errorInput" : "")
          }
        >
          <label htmlFor="cargaHoraria" className="col-sm-3 col-form-label">
            Carga Horária:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="cargaHoraria"
              value={cargaHoraria}
              onChange={setCursoCargaHoraria}
            />
          </div>
        </div>

        <div
          className={"form-group row " + (!isPrecoValido ? "errorInput" : "")}
        >
          <label htmlFor="preco" className="col-sm-3 col-form-label">
            Preço:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="preco"
              value={preco}
              onChange={setCursoPreco}
            />
          </div>
        </div>

        <div
          className={
            "form-group row " + (!isCategoriaValido ? "errorInput" : "")
          }
        >
          <label htmlFor="categoria" className="col-sm-3 col-form-label">
            Categoria:
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              id="categoria"
              value={categoria}
              onChange={setCursoCategoria}
            >
              <option>INFORMATICA</option>
              <option>ENGENHARIA</option>
              <option>ADMINISTRACAO</option>
              <option>REDES</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <button
            className="btn btn-primary ml-3 mb-3"
            onClick={(e) =>
              salvarCurso(e, {
                _id,
                codigo,
                descricao,
                cargaHoraria,
                preco,
                categoria,
                isCodigoValido,
                isDescricaoValido,
                isCargaHorariaValido,
                isPrecoValido,
                isCategoriaValido,
              })
            }
          >
            {_id ? "Atualizar" : "Adicionar"}
          </button>
          <button
            className="btn btn-secondary ml-3 mb-3"
            type="button"
            onClick={limparFormularioCurso}
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  _id: store.cursos._id,
  codigo: store.cursos.codigo,
  isCodigoValido: store.cursos.isCodigoValido,
  descricao: store.cursos.descricao,
  isDescricaoValido: store.cursos.isDescricaoValido,
  cargaHoraria: store.cursos.cargaHoraria,
  isCargaHorariaValido: store.cursos.isCargaHorariaValido,
  preco: store.cursos.preco,
  isPrecoValido: store.cursos.isPrecoValido,
  categoria: store.cursos.categoria,
  isCategoriaValido: store.cursos.isCategoriaValido,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      setCursoCodigo,
      setCursoDescricao,
      setCursoCargaHoraria,
      setCursoPreco,
      setCursoCategoria,
      limparFormularioCurso,
      salvarCurso,
    },
    dispatch
  );

const conectado = connect(mapStoreToProps, mapActionToProps)(FormularioCursos);

export { conectado as FormularioCursos };
