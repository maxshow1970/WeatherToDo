import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "../TodoList";
import "./style.css";
import TodoForm from "../TodoForm";
import TodoHeader from "../TodoHeader";
import TodoFooter from "../TodoFooter";
import WeatherDisplay from "../WeatherDisplay";
import {
  addItem,
  deleteItem,
  completedTask,
  clearCompleted,
  allViewItems,
  activeViewItems,
  completedViewItems,
  editItem
} from "../../actions/actions";

class TodoApp extends Component {
  constructor(props, context) {
    super(props);
  }

  onEdit = (textIn, key) => {
    const { actions } = this.props;

    const { items } = this.props.todo;

    const updeatedItems = items.map(value => {
      if (value.key === key) value.text = textIn;
      return value;
    });

    actions.editItem(updeatedItems);
  };

  onCompeted = key_id => {
    const { actions } = this.props;
    const { items } = this.props.todo;
    const complete = items.map(item => {
      const { key } = item;

      if (key !== key_id) {
        return { ...item };
      } else {
        return { ...item, completed: !item.completed };
      }
    });

    actions.completedTask(complete);
  };

  render() {
    const ToDoListProps = {
      entries: this.props.todo.itemsFiltered,
      deleteItemS: this.props.actions.deleteItem,
      completedTaskS: this.onCompeted,

      editItemS: this.onEdit
    };

    const TodoFooterProps = {
      clearCompleted: this.props.actions.clearCompleted,
      allViewItems: this.props.actions.allViewItems,
      activeViewItems: this.props.actions.activeViewItems,
      completedViewItems: this.props.actions.completedViewItems,
      count: this.props.todo.items.length
    };

    const TodoFormProps = {
      textInput: this.props.todo.items.text,
      addItem: this.props.actions.addItem
    };

    return (
      <div className="todoListMain">
        <WeatherDisplay />
        <TodoHeader />
        <div className="main">
          <TodoForm {...TodoFormProps} />
        </div>
        <TodoList {...ToDoListProps} />
        <TodoFooter {...TodoFooterProps} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addItem,
        deleteItem,
        completedTask,
        clearCompleted,
        allViewItems,
        activeViewItems,
        completedViewItems,
        editItem
      },
      dispatch
    )
  };
};

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
