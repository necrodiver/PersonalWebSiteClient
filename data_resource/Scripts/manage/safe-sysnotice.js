﻿//NewMail
$(document).ready(function () {
    var $mailTable = $('#newMailTable'),
    $deleteMail = $('#btn_DeleteMail');

    $mailTable.bootstrapTable({
        method: 'get',
        toggle: 'table',
        dataType: "json",
        url: "../../../Test/data1.json",
        height: $(window).height() - 200,
        striped: true,
        dataType: "json",
        pagination: true,
        pageSize: 20,
        pageList: [10, 25, 50, 100],
        pageNumber: 1,
        sortable: true,
        sortOrder: 'desc',
        //sidePagination: "server",//分页条件
        queryParams: function (params) {//查询参数，用于自定义查询传的条件参数
            var subcompany = $('#subcompany option:selected').val();
            var name = $('#name').val();
            return {
                pageNumber: params.offset + 1,
                pageSize: params.limit,
                companyId: subcompany,
                name: name
            };
        },
        search: false,
        idField: "id",
        uniqueId: "id",
        queryParamsType: "limit", //参数格式,发送标准的RESTFul类型的参数请求
        showRefresh: false, //显示 刷新按钮
        searchOnEnterKey: true,  //设置为 true时，按回车触发搜索方法，否则自动触发搜索方法
        columns: [{
            field: 'id',
            title: "id",
            checkbox: true,
            width: '5%'
        }, {
            title: '状态',
            align: 'center',
            width: '5%',
            formatter: function (value, row, index) {
                return '<em class="fa fa-envelope-o edit_isRead" style="color:#7CCD7C;" title="未读"></em>';
            }
        }, {
            field: 'name',
            width: '10%',
            title: '发送人',
            align: 'center',
            formatter: function (value, row, index) {
                return $('#sendPeopleTemplate').html().format('../../../Images/user-ceshi.jpg', value + ' ');
            }
        },
        {
            field: 'name',
            title: '公告标题',
            width: '20%',
            formatter: function (value, row, index) {
                return value;
            }
        }, {
            field: 'price',
            title: '公告内容',
            width: '40%',
            formatter: function (value, row, index) {
                return value;
            }
        }, {
            field: 'time',
            title: '接收时间',
            width: '10%',
            formatter: function (value, row, index) {
                var myDate = new Date();
                var year = myDate.getFullYear();
                var month = myDate.getMonth() + 1;
                var date = myDate.getDate();
                var h = myDate.getHours();
                var m = myDate.getMinutes();
                var s = myDate.getSeconds();
                function p(s) {
                    return s < 10 ? '0' + s : s;
                }
                var now = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
                return '<p style="font-size:10px;">' + now + '</p>';
            }
        }, {
            field: null,
            title: '操作',
            width: '10%',
            align: 'center',
            formatter: function (value, row, index) {
                return $('#tableEditTemplate').html().format(value);
            },
            events: {
                'click .table_edit_delete': function (e, value, row, index) {
                    var num = $(this).attr('editId');
                    swal({
                        title: "你确认要删除选中的消息？" + index,
                        text: "这些消息将会被删除而无法找到，请确认是否存在未读消息，或者有未接收的附件",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "是的，删除",
                        cancelButtonText: "不，让我再想想",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    }, function (isConfirm) {
                        if (isConfirm) {
                            $mailTable.bootstrapTable('removeByUniqueId', num);
                            swal("已删除！", "所选中的项删除成功！", "success");
                        } else {
                            swal.close();
                        }
                    });
                }

            }
        }]

    });
    $(".form_datetime").datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        language: 'zh-CN'
    });

    $deleteMail.click(function () {
        var ids = $.map($mailTable.bootstrapTable('getSelections'), function (row) {
            return row.id;
        });
        if (ids.length >= 1) {
            swal({
                title: "你确认要删除选中的消息？",
                text: "这些消息将会被删除而无法找到，请确认是否存在未读消息，或者有未接收的附件",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "是的，删除",
                cancelButtonText: "不，让我再想想",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    $mailTable.bootstrapTable('remove', {
                        field: 'id',
                        values: ids
                    });
                    swal("已删除！", "所选中的项删除成功！", "success");
                } else {
                    swal.close();
                }
            });
        } else {
            //['error', 'warning', 'info', 'success', 'input', 'prompt']
            swal("删除提示", "请先选择要删除的项~~", "info");
        }
    });
    $('#newMailContext').summernote({
        lang: 'zh-CN',
        fontNames: ['宋体', '微软雅黑', '楷体', '黑体', '隶书', 'andale mono', 'arial', 'arial black', 'comic sans ms', 'impact']
    });
    $('#btnNickNameSearch').click(function () {
        var users = $('#textUsers').val().split(';');
        if (users.length > 0) {
            users.forEach(function (val, index) {
                if (val.length > 1) {
                    $('.new_mail_users').append($('#userSearchTemplate').html().format('../../../Images/user-ceshi.jpg', val));
                    $('.remove_user').click(function () {
                        $(this).parent('.users_context').remove();
                    });
                }
            });
        }
    });
    $('#btnUserType').change(function () {
        var val = $(this).children('.active.focus').children('input').val();
        if (val == '1' || val == '2')
            $('.new_mail_userCtrl').addClass('hidden');
        else
            $('.new_mail_userCtrl').removeClass('hidden');
    });

    $('#btnTableRefresh').click(function () {
        $mailTable.bootstrapTable('refresh', { url: '../../../Test/data1.json' });
    });
});
